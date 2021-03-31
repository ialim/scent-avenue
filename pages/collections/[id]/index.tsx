import { useRouter } from "next/router";
import { CollectionList } from "../../../components/collection-list-container";
import { CollectionListItem } from "../../../components/collection-list-item";
import { Container } from "../../../components/container";

const Collection = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Container path={`/collections/${id}`} name={id}>
        <CollectionList>
          <CollectionListItem
            img="https://source.unsplash.com/kxLh9c8HBZc"
            imgAlt="chanel no5"
            url="/chanel/no5"
            title="Chanel No5 Eau De Parfum 50ml"
            eyebrow="Chanel"
            pricing="₦53,500"
          />
          <CollectionListItem
            img="https://source.unsplash.com/kxLh9c8HBZc"
            imgAlt="chanel no5"
            url="/chanel/no5"
            title="Chanel No5 Eau De Parfum 50ml"
            eyebrow="Chanel"
            pricing="₦53,500"
          />
          <CollectionListItem
            img="https://source.unsplash.com/kxLh9c8HBZc"
            imgAlt="chanel no5"
            url="/chanel/no5"
            title="Chanel No5 Eau De Parfum 50ml"
            eyebrow="Chanel"
            pricing="₦53,500"
          />
          <CollectionListItem
            img="https://source.unsplash.com/kxLh9c8HBZc"
            imgAlt="chanel no5"
            url="/chanel/no5"
            title="Chanel No5 Eau De Parfum 50ml"
            eyebrow="Chanel"
            pricing="₦53,500"
          />
        </CollectionList>
      </Container>
    </>
  );
};

export default Collection;
