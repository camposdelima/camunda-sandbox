const { Client, logger } = require('camunda-external-task-client-js');

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: 'http://localhost:8051/engine-rest', use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card'
client.subscribe('say-hello', async function({ task, taskService }) {
  console.log('opaa');
  // // Put your business logic here

  // // Get a process variable
  const amount = task.variables.getAll('amount');
  // const item = task.variables.get('item');

  console.log(amount);
  // console.log(`Charging credit card with an amount of ${amount}€ for the item '${item}'...`);


  await taskService.complete(task);
});