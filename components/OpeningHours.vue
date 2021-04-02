<template>
  <NjSection variant="section-xl">
    <div class="grid grid-cols-1 gap-y-8">
      <div v-if="showCurrentDay">
        <p>
          {{ getDayName(getCurrentDay()) }}:
          {{ getStartTime(getCurrentDay()) }}-{{ getEndTime(getCurrentDay()) }}
        </p>
      </div>
      <div v-else-if="isClosed">
        <p>-</p>
      </div>
      <div v-else-if="pairing">
        <div v-for="(value, name, index) in pairedDays" :key="index">
          {{ getPairedValue(value) }}: {{ name }}
        </div>
      </div>
      <div v-else v-for="(item, index) in filterDays" :key="index">
        <p>{{ getDayName(index) }}: {{ getTimes(index) }}</p>
      </div>
    </div>
  </NjSection>
</template>

<script>
export default {
  name: "OpeningHours",
  props: {
    /*days: {
      type: Array,
      default: () => [],
      required: true
    },*/
    pairing: {
      type: Boolean,
      default: false
    },
    cycleWeek: {
      type: Boolean,
      default: false
    },
    showClosedDays: {
      type: Boolean,
      default: false
    },
    closedText: {
      type: String,
      default: "-"
    },
    showCurrentDay: {
      type: Boolean,
      default: false
    },
    isClosed: {
      type: Boolean,
      default: false
    },
    locale: {
      type: String,
      default: "de"
    },
    weekdaysLong: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getPairedValue(value) {
      if (Array.isArray(value)) {
        if (this.weekdaysLong) {
          if (value.length > 1) {
            return value[0] + "-" + value[value.length - 1];
          } else {
            return value[0];
          }
        } else {
          if (value.length > 1) {
            return (
              value[0].substring(0, 2) +
              "-" +
              value[value.length - 1].substring(0, 2)
            );
          } else {
            return value[0].substring(0, 2);
          }
        }
      }
    },
    getDayName(index) {
      return this.weekdaysLong
        ? this.filterDays[index]?.name
        : this.filterDays[index]?.name.substring(0, 2);
    },
    getStartTime(index) {
      if (this.locale === "de") {
        return this.filterDays[index]?.times[0]?.start;
      }
      {
        return this.filterDays[index]?.times[0]?.start + "am";
      }
    },
    getEndTime(index) {
      if (this.locale === "de") {
        return this.filterDays[index]?.times[0]?.end + " Uhr";
      } else {
        return this.filterDays[index]?.times[0]?.end + "pm";
      }
    },
    getTimes(index) {
      if (this.getStartTime(index) !== "" && this.getEndTime(index) !== "") {
        return this.getStartTime(index) + "-" + this.getEndTime(index);
      } else {
        return this.closedText;
      }
    },
    getCurrentDay() {
      const date = new Date();
      return date.getDay() - 1;
    }
  },
  computed: {
    filterDays() {
      if (this.showClosedDays) {
        return this.days;
      } else {
        return this.days.filter(el => el.times.length > 0);
      }
    },
    pairedDays() {
      let newObj = {};
      this.days.forEach((el, index) => {
        let key = this.getTimes(index);
        if (Array.isArray(newObj[key])) {
          newObj[key].push(el.name);
        } else {
          newObj[key] = [el.name];
        }
      });
      return newObj;
    }
  },
  data() {
    return {
      days: [
        {
          name: "Monday",
          times: [
            {
              end: "18:00",
              start: "09:00"
            }
          ]
        },
        {
          name: "Tuesday",
          times: [
            {
              end: "12:00",
              start: "09:00"
            }
          ]
        },
        {
          name: "Wednesday",
          times: [
            {
              end: "18:00",
              start: "09:00"
            }
          ]
        },
        {
          name: "Thursday",
          times: []
        },
        {
          name: "Friday",
          times: [
            {
              end: "18:00",
              start: "09:00"
            }
          ]
        },
        {
          name: "Saturday",
          times: [
            {
              end: "18:00",
              start: "09:00"
            }
          ]
        },
        {
          name: "Sunday",
          times: [
            {
              end: "12:00",
              start: "09:00"
            },
            {
              end: "18:00",
              start: "14:00"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
