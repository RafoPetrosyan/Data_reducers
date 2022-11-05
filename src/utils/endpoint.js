const endpoint = (feature, route) => ({
    endpoint: `${feature} ${route}`,
    url: route,
});

export default endpoint;