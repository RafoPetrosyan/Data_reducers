export const makeAction = (type, payload = null, callback = null) => ({
    type,
    payload,
    callback,
});