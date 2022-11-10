import { ref } from 'vue';

export default function useLocationProperties() {
    const locationProperties = {
        lat: ref(''),
        long: ref(''),
    };
    window.navigator
        ? window.navigator.geolocation.getCurrentPosition((position) => {
              locationProperties.lat.value = position.coords.latitude;
              locationProperties.long.value = position.coords.longitude;
          })
        : 'Location is not supported by your browser';

    return locationProperties;
}
