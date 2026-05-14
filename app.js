const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the viewing engine
app.set('view engine', 'ejs');

// Serve static files (CSS, Images)
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    const data = {
        companyName: "Acme Corp",
        tagline: "Real-time insights. Infinite scale.",
        services: ["Kafka Clusters", "Data Pipelines", "Live Analytics"]
    };
    res.render('index', data);
});

//const PORT = process.env.PORT || 3000;
//const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
