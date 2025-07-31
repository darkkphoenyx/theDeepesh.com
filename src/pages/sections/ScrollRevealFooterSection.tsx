<div
  className="relative h-[1200px] bg-background" // remember the h is the total height of the viewport for the actual component to be placed... so play around with the values
  style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} //here the polygon is a rectangle that is used as clipping mask for the component to be rendered
>
  <div className="relative h-[calc(100vh+1200px)] -top-[100vh]">
    <div className="sticky top-[calc(100vh-1200px)] h-[1200px]">
      {/* <Skills /> */}

      {/* place your component here */}
    </div>
  </div>
</div>;
