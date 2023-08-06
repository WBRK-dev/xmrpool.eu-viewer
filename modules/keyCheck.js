// Check if xmrpool.eu key is set and valid
StorageKey = localStorage.getItem("monerokey");


// TODO - The key check is not working correctly.
//        My key is invalid although it is.

// try { Key_check = StorageKey.match(/4[0-9AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{93}/); } catch (error) { Key_check = null; }
// if (StorageKey === null || Key_check === null) {



if (!StorageKey) {
    openDir = (location.pathname === "/xmrpool.eu-viewer/") ? "./settings" : "../settings";
    window.open(openDir, "_self");
    console.log("XMR key check failed: " + JSON.stringify(StorageKey));
} else {
    key = localStorage.getItem("monerokey");
}