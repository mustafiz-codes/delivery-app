import React, { useState, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environment";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 51.509811,
  longitude: -0.02993,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

// const inputAutocompleteProps = {
//   label: "",
//   placeholder: "",
//   onPlaceSelected: function () {},
// };

function InputAutocomplete(props) {
  const { label, placeholder, onPlaceSelected } = props;
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails={true}
        onPress={(data, details = null) => {
          onPlaceSelected(details, data);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export default function MapScreen() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDirection, setShowDirection] = useState(false);
  const mapRef = useRef("");

  const moveTo = async (position = LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const onPlaceSelected = (details, flagType = "origin" | "destination") => {
    const set = flagType === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details.geometry.location.lat || 0,
      longitude: details.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  const edgePaddingValue = 120;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirection(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirection && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeColor="#FFAA33"
            strokeWidth={4}
          />
        )}
      </MapView>
      <View style={styles.searchContainer}>
        <InputAutocomplete
          label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin");
          }}
        />
        <InputAutocomplete
          label="Destination"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }}
        />
        <TouchableOpacity
          className="items-center py-3 text-bold bg-yellow-400"
          onPress={traceRoute}
        >
          <Text>Check Route</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    left: "5%",
    right: "5%",
    top: Constants.statusBarHeight,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: "1%",
    borderRadius: 4,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  routeButton: {
    backgroundColor: "#",
  },
});
