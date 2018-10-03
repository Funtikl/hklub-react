import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const styles = {
  img: {
    minWidth: "100%",
    minHeight: "450px",
    maxHeight: "450px"
  },
  transbox: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    opacity: "0.8",
    position: "absolute",
    margin: "auto",
    top: "0",
    left: "64%",
    height: "400px",
    width: "350px"
  }
};
const items = [
  {
    src: "http://www.musavat.az/wp-content/uploads/2016/06/mod-93925.jpg.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src:
      "https://cdn.shopify.com/s/files/1/0250/1496/products/Sl1_1458542611_1024x1024.jpg?v=1482496548",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
      "http://www.strangehistory.net/blog/wp-content/uploads/2013/11/sweets.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={styles.img} src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carousels;
