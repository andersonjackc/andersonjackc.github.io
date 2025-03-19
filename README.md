# [andersonjackc.github.io](https://andersonjackc.github.io)  
Initially, it only housed my Individual Project for CS320. I have now updated it to include a personal project. I might update it more in the future...  

## CS320  

- A clock web app that allows you to pick between Standard and Military time. There was also some interesting CSS involved here.  
- A Math Flashcard web app, designed as a teaching tool for Elementary/Middle School students. This could most likely be simplified, but as an initial project, I was able to learn about the intricacies of JavaScript as well as some cool CSS.  

## Personal Projects  

### Pixel Generator  
Takes an input image and pixelizes it. There are various algorithmic implementations to choose from:  

- **First Pixel**  
  Takes the first pixel in the sample grid space as the pixel color to display.  

- **Average Pixel**  
  Takes the average RGB value of the pixels in the grid space as the color to display.  

- **Median Pixel**  
  Rather than taking the average, taking the median creates an image with fewer colors.  

- **Posterize Pixel**  
  Allows the user to pick the number of levels to separate their input image into. Each grid space is then categorized based on the level it falls into.  

- **K-Means Pixel**  
  Implements the K-Means Algorithm to group similar colors together.  

- **Dithering Pixel**  
  Applies a dithering method, which determines the color palette behind the scenes. Each grid space is mapped to one of the reduced colors in the palette. Currently supports 16, 32, 256, 4096, and Grayscale.  
