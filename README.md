<p align="center">
  <img width=300 height=300 src="static/Agent-Crop-1000x1000.png" alt="Agent Crop Logo">
</p>

# Agent-Crop
This is the repository for the project Agent Crop. Agent Crop is used to identify the diseases in the crops and also suggests possible cure for them.  
The link for the Pre-Trained Model can be found in the app.py file.

The api can be accessed at the endpoint: https://agentcrop.azurewebsites.net/api/predict  
The request should have 'files' part and should only include png and jpg/jpeg files of size less than 50 MB.  

## How to Implement API in your App  

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="https://agentcrop.azurewebsites.net/api/predict" method = "POST" enctype = "multipart/form-data">
      <input type="file" name="files" multiple required />
      <input type="submit" value="submit" />
    </form>
  </body>
</html>
```

The api returns the json response in the following format:

```json
{
  "image_1": {
    "description": "description_1",
    "prediction": "prediction_1",
    "source": "sorce_link_1",
    "symptoms": "symptoms_1"
  },
  "image_2": {
    "description": "description_2",
    "prediction": "prediction_2",
    "source": "sorce_link_2",
    "symptoms": "symptoms_2"
  }
}
```

Here is the list of crops and the diseases we can support at this moment:

- Apple
  - Apple Scab
  - Black Rot
  - Cedar Rust
  - Healthy
- Blueberry
  - Healthy
- Cherry
  - Powdery Mildew
  - Healthy
- Corn (Maize)
  - Grey Leaf Spot
  - Common Rust of Maize
  - Northern Leaf Blight
  - Healthy
- Grape
  - Black Rot
  - Black Measles (Esca)
  - Leaf Blight (Isariopsis Leaf Spot)
  - healthy
- Orange
  - Huanglongbing (Citrus Greening)
- Peach
  - Bacterial spot
  - healthy
- Bell Pepper
  - Bacterial Spot
  - Healthy
- Potato
  - Early Blight
  - Late Blight
  - Healthy
- Raspberry
  - Healthy
- Rice
  - Brown Spot
  - Hispa
  - Leaf Blast
  - Healthy
- Soybean
  - Healthy
- Squash
  - Powdery Mildew
- Strawberry
  - Leaf Scorch
  - Healthy
- Tomato
  - Bacterial Spot
  - Early Blight
  - Late Blight
  - Leaf Mold
  - Septoria Leaf Spot
  - Spider Mites (Two-spotted Spider Mite)
  - Target Spot
  - Yellow Leaf Curl Virus
  - Mosaic Virus
  - Healthy
