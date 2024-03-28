import ImgZoom from "../../Components/Products/ImgZoom";
import ProductDescription from "../../Components/Products/ProductDescription";
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const rows = [
    { altura: '16cm', largura: '20cm', lateral: '0,12cm' },
    { altura: '20cm', largura: '30cm', lateral: '0,12cm' },
    { altura: '25cm', largura: '35cm', lateral: '0,12cm' },
    { altura: '30cm', largura: '40cm', lateral: '0,12cm' },
    { altura: '36cm', largura: '48cm', lateral: '0,12cm' },
    { altura: '40cm', largura: '50cm', lateral: '0,13cm' },
];

const BagPlasticTape: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola de plástico com alça fita'}>
            <ImgZoom img="sacola-tec-semfundo.png" />

            <ProductDescription
                mainTitle="Sacola de Plástico com Alça Fita"
                description="As sacolas de plástico com alça fita representam uma categoria premium dentro das opções de 
                            embalagens plásticas, combinando a funcionalidade do material plástico com um toque de 
                            elegância proporcionado pelas alças de fita. Este tipo de sacola é frequentemente utilizado
                            por marcas que desejam oferecer uma experiência de compra superior aos seus clientes, 
                            especialmente em setores como moda, cosméticos e presentes."
                applications={[
                    {
                        title: 'Lojas de Moda e Boutiques: ',
                        description: 'Ideal para marcas de roupas e acessórios que desejam reforçar sua imagem de luxo e qualidade.'
                    },
                    {
                        title: 'Cosméticos e Perfumarias: ',
                        description: 'Usadas para embalar produtos de beleza, onde a apresentação é essencial para complementar a experiência de compra do consumidor.'
                    },
                    {
                        title: 'Joalherias e Lojas de Presentes: ',
                        description: 'Perfeitas para itens que são frequentemente dados como presentes, as sacolas adicionam um toque especial à entrega do produto.'
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagPlasticTape;
