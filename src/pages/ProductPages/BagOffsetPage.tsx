import ImgZoom from "../../Components/Products/ImgZoom"; 
import ProductDescription from "../../Components/Products/ProductDescription"; 
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const rows = [
    { altura: '16cm', largura: '10cm', lateral: '5cm' },
    { altura: '15cm', largura: '13cm', lateral: '7cm' },
    { altura: '23cm', largura: '16cm', lateral: '9cm' },
    { altura: '20cm', largura: '24cm', lateral: '7cm' },
    { altura: '25cm', largura: '21cm', lateral: '9cm' },
    { altura: '25cm', largura: '35cm', lateral: '10cm' },
    { altura: '29cm', largura: '35cm', lateral: '10cm' },
    { altura: '35cm', largura: '25cm', lateral: '10cm' },
    { altura: '35cm', largura: '40cm', lateral: '13cm' },
    { altura: '44cm', largura: '31cm', lateral: '11cm' },
];

const BagOffsetPage: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola papel Offset'}>
            <ImgZoom img="bag-modelo-produtos.png" />

            <ProductDescription
                mainTitle="Sacola de papel Offset"
                description="As sacolas de papel que utilizam a impressão offset como método para aplicar designs,
                logos e informações na superfície da sacola. Este método de impressão é bastante
                popular devido à sua alta qualidade de imagem e eficiência para grandes tiragens."
                applications={[
                    {
                        title: 'Eventos Corporativos e Feiras: ',
                        description: `Ideal para distribuir materiais promocionais ou brindes, pois o design atraente e a qualidade da impressão elevam a percepção da marca.`
                    },
                    {
                        title: 'Lojas de Varejo e Boutiques: ',
                        description: `Para embalar produtos de maneira elegante, oferecendo aos clientes uma experiência de compra premium.`
                    },
                    {
                        title: 'Campanhas de Marketing e Lançamentos de Produtos: ',
                        description: `Como parte de uma estratégia de marketing integrada, essas sacolas podem ser usadas para gerar entusiasmo e visibilidade para novos produtos ou serviços.`
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagOffsetPage;
