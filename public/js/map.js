console.log("mapToken:", mapToken);
console.log("listing geometry:", listing.geometry);
maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
    container: "map",
    style: maptilersdk.MapStyle.STREETS.DARK,
    center: listing.geometry.coordinates,
    zoom: 10,
});

new maptilersdk.Marker({ color: "#fe424d" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new maptilersdk.Popup({ offset: 25 }).setHTML(
            `<h4>${listing.title}</h4><p>${listing.location}</p>`
        )
    )
    .addTo(map);