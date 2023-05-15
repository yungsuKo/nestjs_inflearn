const gcsEvent = event;
console.log(`Processing file: ${gcsEvent.name}`);
console.log(`event : ${JSON.stringify(event)}`);
console.log(`event : ${JSON.stringify(context)}`);
};
