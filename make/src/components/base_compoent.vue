<template>
<link rel="stylesheet" href="./style.css">
  <div>
    <h1>Create an event</h1>
    <form>
<base_select></base_select>

      <h3>Name & describe your event</h3>

      <base_From
        v-model="event.title"
        label="Title"
        type="text"
        />
<br>
<br>
      <base_From
        v-model="event.description"
        label="Description"
        type="textarea"
        />
      <h3>Where is your event?</h3>
      <base_From
        v-model="event.location"
        label="Location"
        type="text"
        />
      <h3>Are pets allowed?</h3>
      <div>
        <input
            type="radio"
            v-model="event.pets"
            :value="1"
            name="pets"
          />
        <label>Yes</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="event.pets"
          :value="0"
          name="pets"
        />
        <label>No</label>
      </div>
      <radio_button/>
      <button  id="button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import base_From from './baseFrom.vue'
// eslint-disable-next-line camelcase
import base_select from './base_select.vue'
// eslint-disable-next-line camelcase
import radio_button from './radio_button.vue'
export default {
  components: {
    [base_From.name]: base_From,
    [base_select.name]: base_select,
    [radio_button.name]: radio_button
  },
  name: 'create_event',
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}

</script>
<style>
#button
{
  border-radius: 15px;
  background-color: #f44336;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
