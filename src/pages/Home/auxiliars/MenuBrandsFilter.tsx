import styled from "styled-components";
const Brands = [
  {
    name: "adidas",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/adidas.jpg?alt=media&token=338b9349-f864-475f-816f-5f24615d1338",
  },
  {
    name: "nike",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/nike.jpg?alt=media&token=6fa99abf-8a57-41e2-bccf-8fc8d9c25f5a",
  },
  {
    name: "New Balance",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/newbalance.jpg?alt=media&token=8f55aea1-8135-4a07-9951-cd2ccd1bf109",
  },
  {
    name: "Air Jordan",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/airjordan.jpg?alt=media&token=07353f34-0766-40c5-8eac-22ea8bb6a47b",
  },
  {
    name: "Yeezy",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/yeezy.jpg?alt=media&token=d11da7ee-b681-44d3-9264-e2602b7612ae",
  },
  {
    name: "Converse",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/converse.jpg?alt=media&token=5558391f-5dc9-4b92-9f39-2869e72e207f",
  },
  {
    name: "Asics",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/asics.jpg?alt=media&token=edb58f7f-3877-4ab8-9851-98e9eef9f1e3",
  },
  {
    name: "Revenge x Storm",
    img: "https://firebasestorage.googleapis.com/v0/b/sneakers-commerce.appspot.com/o/revenge.jpg?alt=media&token=2023707a-bec4-4f1a-822b-eea188c9421c",
  },
];

const MenuBrandsContainer = styled.div`
  padding: 1.125rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  gap: 15px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  }
`;
const BrandContainer = styled.div`
  min-height: 150px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    transition: all 450ms ease-in-out;
    z-index: -1;
  }

  display: flex;
  div {
    width: 100%;
    align-self: center;
    justify-self: center;
    z-index: 3;
    position: absolute;
    p {
      color: white;
      text-align: center;
      margin: 0 auto;
      text-shadow: 1px 1px black;
    }
    a {
      text-decoration: none;
      background-color: white;
      padding: 12px;
      color: #616161;
      position: absolute;
      width: fit-content;
      height: fit-content;
      top: 20%;
      right: 5%;
      left: 5%;
      bottom: 18%;
      transition: all 350ms ease-in-out;
      transform: translateY(150px);
    }
    @media (min-width: 768px) {
      a {
        top: 20%;
        right: 25%;
        left: 25%;
        bottom: 18%;
      }
    }
  }
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.125);
    }
    .link {
      transform: translateY(-10px);
    }
  }
`;
const MenuBrandsFilter = () => {
  return (
    <MenuBrandsContainer>
      {Brands.map((brand) => (
        <BrandContainer key={brand.name}>
          <img src={brand.img} alt={brand.name} />
          <div>
            <p>{brand.name}</p>
            <a className="link" href="!#">
              Comprar ahora
            </a>
          </div>
        </BrandContainer>
      ))}
    </MenuBrandsContainer>
  );
};

export default MenuBrandsFilter;
