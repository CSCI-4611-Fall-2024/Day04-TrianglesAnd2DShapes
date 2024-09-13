/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   
    helloRect: gfx.Mesh2;

    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

        this.helloRect = new gfx.Mesh2();
    }



    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        const circle = new gfx.Mesh2();
        circle.material.drawMode = this.renderer.gl.TRIANGLE_FAN;
        const circleVerts: gfx.Vector2[] = [];
        circleVerts.push(new gfx.Vector2(0,0));
        const nCircleSlices = 10;
        for (let x=0; x<=nCircleSlices; x++) {
            const angle = x * 2.0 * Math.PI / nCircleSlices;
            let radius = 0.7;
            if (x % 2 == 0) {
                radius = 0.2;
            }
            const xCoord = radius * Math.cos(angle);
            const yCoord = radius * Math.sin(angle);
            circleVerts.push(new gfx.Vector2(xCoord, yCoord));
        }
        circle.setVertices(circleVerts);
        this.scene.add(circle);
        circle.material.color = gfx.Color.GREEN;

        this.helloRect = gfx.Geometry2Factory.createRect(0.8, 0.1);
        this.scene.add(this.helloRect);
        this.helloRect.position.set(0, 0.5);
        this.helloRect.material.color = gfx.Color.RED;

        const helloTexture = new gfx.Text("Hello World", 256, 32, '32px monospace', gfx.Color.WHITE);
        this.helloRect.material.texture = helloTexture;


        const hexGeom = new gfx.Line2(gfx.LineMode2.LINE_LOOP);
        const hexVerts: number[] = [];
        const nSlices = 50;
        for (let x=0; x<nSlices; x++) {
            const angle = x * 2.0 * Math.PI / nSlices;
            const radius = 0.9;
            const xCoord = radius * Math.cos(angle);
            const yCoord = radius * Math.sin(angle);
            hexVerts.push(xCoord, yCoord);
        }
        hexGeom.setVertices(hexVerts);
        this.scene.add(hexGeom);


        const mesh = new gfx.Mesh2();
        mesh.material.drawMode = this.renderer.gl.TRIANGLES;
        const vertices: gfx.Vector2[] = [];
        vertices.push(new gfx.Vector2(.30, .75));
        vertices.push(new gfx.Vector2(.40, .20));
        vertices.push(new gfx.Vector2(.50, .75));
        vertices.push(new gfx.Vector2(.60, .20));
        vertices.push(new gfx.Vector2(.80, .20));
        vertices.push(new gfx.Vector2(.70, .75));
        mesh.setVertices(vertices);
        this.scene.add(mesh);


    }


    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.helloRect.position.y -= 0.05;
    }
}
