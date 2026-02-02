const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat/', async (req, res) => {
    try {
        const { message } = req.body;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': process.env.ANTHROPIC_API_KEY,
              'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 2000,
              messages: [{ role: 'user', content: message }]
            })
          });
      
          const data = await response.json();
          res.json(data);
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'Failed to communicate with Claude' });
        }
      });
      
      const PORT = 3001;
      app.listen(PORT, () => {
        console.log(`Backend server running on http://localhost:${PORT}`);
      });
      Step 2: Install dependencies
      In your terminal:
      bashnpm install express cors
      Step 3: Update your frontend code
      Change your existing fetch call to:
      javascriptconst response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input  // or whatever your input variable is
        })
      });
      
      const data = await response.json();
      const text = data.content.map(item => item.text || "").join("\n");
     
    }