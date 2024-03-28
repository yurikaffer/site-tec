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

const BagDuplexPage: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola de papel Duplex'}>
            <ImgZoom img="Sacola-Tec-Duplex.png" />

            <ProductDescription
                mainTitle="Sacola de papel Duplex"
                description="As sacolas de papel Duplex são outro tipo importante no mundo das embalagens personalizadas. 
                            O papel Duplex é um material robusto, frequentemente utilizado para criar sacolas que não apenas têm uma 
                            ótima aparência, mas também são capazes de suportar pesos relativamente altos."
                applications={[
                    {
                        title: 'Lojas de Alto Padrão e Boutiques: ',
                        description: `Ideal para marcas que desejam transmitir uma imagem de luxo e exclusividade, as sacolas de papel Duplex são perfeitas para embalar produtos de moda, joias, e cosméticos.`
                    },
                    {
                        title: 'Lançamentos de Produtos e Edições Limitadas: ',
                        description: `A qualidade e a estética destas sacolas as tornam escolhas ideais para o lançamento de produtos especiais ou edições limitadas, onde a primeira impressão é crucial.`
                    },
                    {
                        title: 'Eventos Corporativos e Promoções: ',
                        description: `Para empresas que desejam se destacar em eventos ou campanhas promocionais, oferecendo produtos ou materiais informativos em uma embalagem que fala volumes sobre a qualidade da marca.`
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagDuplexPage;
