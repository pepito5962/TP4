$(document).ready(function () {


    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        checkConnection();
    }

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        checkConnection();
    }


    function onDeviceReady() {
        var element = document.getElementById('deviceProperties');
        element.innerHTML = 'Device Model: ' + device.model + '<br />' +
            'Device Cordova: ' + device.cordova + '<br />' +
            'Device Platform: ' + device.platform + '<br />' +
            'Device UUID: ' + device.uuid + '<br />' +
            'Device Version: ' + device.version + '<br />';
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        onDeviceReady();
    }

});
