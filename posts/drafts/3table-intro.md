## Introducing 3table

### 05 Mar 2023

Ever wonder how simple a 3D editor could be?

Like, what is the essential, unavoidable complexity that must be exposed to a user for even basic functionality.

[3table](https://3table.glitch.me/) is a web experiment based on exploring this idea.

<br/><img src="./drafts/3table_shot1.jpg" alt="3table cube screenshot" width="60%" height="60%">

The above screenshot taken from my smartphone browser is what you get on first load.
I provided some basic shapes such as the default sacrificial cube shown (incantations optional).

The GUI is based on a tabular layout of the properties of the various different parts from which a 3D model may be composed.

Each part's properties may be manipulated by clicking a table cell and typing a new value.
In the case of numeric properties, a slider is provided.
In this way the 3D space has been mapped into a 2D projection with a single scalar manipulator.
Put simply, a table, and a slider.
This way we can change the scale, position, and orientation (rotation) of the individual parts in the three different dimensions independently with the same controls.

Parts can be composed hierarchically by specifying a parent part.
When a parent's properties are updated the changes are applied to all children.
This allows a number of parts to be modified together by changing a single property.
Parents are also reusable as parts so you can create multiple copies of a group of parts.

The actual 3D model is displayed along with the table and is updated in realtime with any changes to the data.

Finally, a Comma, Separated, Value (CSV) text component is provided where you can also edit the model data in CSV format.
This also allows the model to be easily edited in external tools such as spreadsheet editors like MS Excel.

A basic UX goal is that anyone who can use a spreadsheet can create their own 3D models.

When you're happy with your model, it can be exported as an STL file for 3D printing or inclusion in other projects.
I also added a "Bill of Material" (BOM) function that summarizes the models parts.

So, what is it good for?

I don't expect 3D professionals to be very impressed with 3table, but it might be useful to "citizen" modelers to borrow terminology from the no/low code movement.
In particular, it may be well suited for use cases where a simple modeling task like 3D room layout is required as part of a brochure site, for example.

As well as some basic primitive shapes, I included some aluminum profile parts that can be used to design profile-based constructions as in the image below.

<br/><img src="./drafts/3table_shot2.jpg" alt="3table rig screenshot" width="60%" height="60%">

The BOM feature is particularly useful for this kind of use case as I included a facility in the parts specification to allow for the addition of part accessories.
In the example above, the nuts and bolts required to assemble the rig are defined as accessories on the corner parts, allowing the app to calculate the total number required.

<br/><img src="./drafts/3table_shot3.jpg" alt="3table BOM screenshot" width="60%" height="60%">

One of the things I'd like to do next is create sets of object libraries for different domains and use cases such as basic shapes, aluminum profile, furniture perhaps.
Let me know if you have an idea for an object set you would like to see included.

I'd also like to add a 3D model part import capability and a part designer feature or companion app using 2D extrusion and spline rotation.

I'm pretty happy with how it all works so far and feel like I might already start using it for quick mock ups of basic 3D designs and prints.

There are still plenty rough edges and missing edge cases and even some basic stuff that really should be included so let me know if you try it and hit a showstopper for your use case.

You can take a peek at the code [here](https://github.com/joegaffey/3table) but fair warning - its experimental/hobby grade at best.
I might write something about the development aspect if there is any interest.
For now I would only mention that it was developed completely in the browser on [Glitch.com](https://glitch.com/) using vanilla HTML, CSS and JS and the excellent [Three.js](https://threejs.org/) library.

Let me know what you think and thanks for reading!
