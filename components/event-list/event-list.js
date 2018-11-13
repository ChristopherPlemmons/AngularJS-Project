"use strict";

const eventList = {
    templateUrl: "components/event-list/event-list.html",
    bindings: {},
    controller: ["EventService", function(EventService){
        const vm = this;
        vm.receivedData = EventService.returnData();

        // sends event to save in array
        vm.saveEvent = (event) => {
            console.log(event);
            EventService.saveBucket(event);
        }
    }]
    
}


angular
    .module("App")
    .component("eventList",eventList);