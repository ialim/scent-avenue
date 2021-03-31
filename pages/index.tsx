import { RectangularBanner } from "../components/rectangular-banner";
import { CircularMenuItem, ScrollMenuBar } from "../components/scroll-menu-bar";
import { Promotions } from "../components/promotions";
import { PromotionItemFlyer } from "../components/promotion-item";
import { TiledLayout } from "../components/layout-options";
import { Container } from "../components/container";

export default function Home() {
  return (
    <>
      <Container path="/" name="Scent Avenue">
        <ScrollMenuBar itemHeight="4rem">
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/5HrlEGTsaB4"
            name="NEW ARRIVALS"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/9kJhcdH81hw"
            name="MEN"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/GEkO6VF2X-k"
            name="WOMEN"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/2b0JeJTEclQ"
            name="UNISEX"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/5BfKhN6tkTY"
            name="SHOP"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/mfvTtNPjoPY"
            name="GIFT SET"
          />
          <CircularMenuItem
            imgSrc="https://source.unsplash.com/1CuZk0zMSjM"
            name="DEODORANT"
          />
        </ScrollMenuBar>
        <RectangularBanner
          imgSrc="url(https://source.unsplash.com/vgNfaGuO95Q)"
          heading="40% Off"
          subheading="On all Order above 30K + Free Delivery"
          action="SHOP NOW"
        />
        <RectangularBanner
          imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
          heading="20% Off"
          subheading="On Specific Brands"
          action="+ EXPLORE"
        />
        <Promotions name="TOP PICKS">
          <TiledLayout>
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Men's Cologne Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Women's Perfume Under"
              price="15000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
          </TiledLayout>
        </Promotions>
        <Promotions name="FEATURED BRANDS">
          <ScrollMenuBar itemHeight="6rem">
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
            <PromotionItemFlyer
              imgSrc="url(https://source.unsplash.com/5BfKhN6tkTY)"
              caption="Fragrances Under"
              price="5000"
            />
          </ScrollMenuBar>
        </Promotions>
      </Container>
    </>
  );
}
