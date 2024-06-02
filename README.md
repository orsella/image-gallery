# image-gallery

## An assignment to create an image gallery with user accessibility and image optimisation

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

- One page, with a set of thumbnail images, and a larger image
- Styled appropriately with CSS, and make use of media queries.
- Use client-side JavaScript to display the larger image when a thumbnail is selected
- Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

I found writing the code for displaying the thumbnails very difficult. It took me a long time to realise that I was calling the function incorrectly or applying methods to the wrong thing. I was also using forEach incorrectly ;-;
Once I had finally fixed these mistakes, the code makes sense to me but I feel it took me a lot longer to understand than it should of. A lot of my code is also repeated for functions that could be reused for the same thing (left arrow key used and left button pressed for example) but when trying to rewrite this to include both the code either didn't work or I wasn't sure how to write it. I guess I needed to write a left button function and then call that for the two options.

### (Optional)

🏹 Feel free to add any other reflections you would like to share about your submission e.g.

I feel happy with what I have made but it took me a long time to get a functioning site. I definitely need to go over functions again to get a better understanding.
I learnt about quite a few new css properties that were useful for this site to display things in a smaller div that can be scrolled over for mobile or properties that helped with displaying when an item was being tabbed over or hovered on. Examples include outline-color, cursor, overflow, transform- scale(). I tried to make changes to the css betweem mobile, tablet and desktop that made sense, such as the thumbnails being a div that could be scrolled through for mobile where screen size is limited and making the div visible on desktop so the elements could react on hover for the user.

object-fit: cover was a big help for mobile as a big problem was that the images were landscape so they would fit a large screen nicely. This made them look particulary bad on mobile as the image couldn't display properly so object-fit worked great for me here.

css-tricks.com/almanac/properties/o/object-fit/

I mostly used w3, mdn and stackoverflow for general help and more information about a property or method if I was struggling (when I wasn't using trial and error ;-;).

When I was trying to work out how to use arrow keys for navigation, the following link was helpful as it showed how onkeydown worked so I could then use this function with a if loop.

stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
