//Generate test data: 10 request titles 
// "Test request 01" … "Test request 10" 
// with priorities cycling 1–5

const testRequests = [];
for (let i = 1; i <= 10; i++) {
  const title = `Test request ${i.toString().padStart(2, '0')}`;
  const priority = (i % 5) + 1;
  testRequests.push({ title, priority });
  console.log(`Title: ${title}, Priority: ${priority}`);
}