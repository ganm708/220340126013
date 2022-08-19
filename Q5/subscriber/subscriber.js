const mqtt = require('mqtt')
const client = mqtt.connect("mqtt://mqtt-broker")


const topic = "test/sensor-data";

client.on("connect",()=>{
        client.subscribe(topic,function(error){
            if(!error) {
                console.log("subscribed succesfully")
            } else {
                console.log(error)
            }
        })
})

client.on("message",(data,message)=>{
    console.log(`Topic: ${data}, Message: ${message.toString()}`);
})