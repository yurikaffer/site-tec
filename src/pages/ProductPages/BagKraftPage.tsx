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

const BagKraftPage: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola papel Kraft'}>
            <ImgZoom img="bag-modelo-produtos.png" />

            <ProductDescription
                mainTitle="Sacola de papel Kraft"
                description="As sacolas de papel Kraft são uma escolha popular tanto para empresas quanto para consumidores, 
                            devido à sua combinação de resistência, versatilidade e sustentabilidade. Elas são feitas a partir 
                            de papel Kraft, que é conhecido pela sua cor marrom natural, embora também possa ser branqueado 
                            para um visual mais limpo e brilhante."
                applications={[
                    {
                        title: 'Supermercados e Lojas de Alimentos: ',
                        description: `Perfeitas para embalar produtos alimentícios, devido à sua resistência e à percepção de naturalidade.`
                    },
                    {
                        title: 'Lojas de Varejo e Boutiques: ',
                        description: `Muitas lojas escolhem sacolas de papel Kraft para uma abordagem de embalagem mais sustentável e consciente.`
                    },
                    {
                        title: 'Feiras e Eventos: ',
                        description: `Para distribuir materiais promocionais ou amostras de produtos, as sacolas de papel Kraft são uma escolha popular devido à sua versatilidade e apelo ecológico.`
                    },
                    {
                        title: 'Restaurantes e Serviços de Entrega: ',
                        description: `A resistência das sacolas as torna ideais para transportar alimentos, especialmente para serviços de entrega de comida ou take-away.`
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagKraftPage;
