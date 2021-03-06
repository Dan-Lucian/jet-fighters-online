var{PI}=Math;export class Jet{constructor(url){this.img=new Image;this.img.addEventListener("load",()=>{this.loaded=true});this.img.src=url;this.canvas=document.getElementById("canvas");this.ctx=this.canvas.getContext("2d")}draw(state){var{scale,x,y}=state;var rad=-(state.angle*PI/180+PI);this.ctx.setTransform(scale,0,0,scale,x,y);this.ctx.rotate(rad);this.ctx.drawImage(this.img,-this.img.width/2,-this.img.height/2)}setScore(number){this._score=number}hasScoreChanged(number){if(this._score!==number)return true}clearCanvas(){this.ctx.setTransform(1,0,0,1,0,0);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}drawBullets(gameState){var{p1,p2}=gameState;for(var i=0;i<p1.bullets.length;i+=1){this.ctx.fillStyle=p1.bullets[i].color;this.ctx.fillRect(p1.bullets[i].x,p1.bullets[i].y,3,3)}for(var _i=0;_i<p2.bullets.length;_i+=1){this.ctx.fillStyle=p2.bullets[_i].color;this.ctx.fillRect(p2.bullets[_i].x,p2.bullets[_i].y,3,3)}}}