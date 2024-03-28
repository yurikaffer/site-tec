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

const BagTShirtPage: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola de plástico com alça camiseta'}>
            <ImgZoom img="sacola plástico cam sf.png" />

            <ProductDescription
                mainTitle="Sacola de Plástico Alça Camiseta"
                description="As sacolas de plástico com alça tipo camiseta são extremamente comuns em uma variedade de 
                            estabelecimentos comerciais, desde supermercados até lojas de varejo e boutiques. 
                            Este tipo de sacola é facilmente reconhecível pelo design de suas alças, que se 
                            assemelham à forma de uma camiseta."
                applications={[
                    {
                        title: 'Lojas e Boutiques: ',
                        description: `Amplamente usadas para embalar compras devido à sua conveniência e capacidade de suportar uma quantidade razoável de peso.`
                    },
                    {
                        title: 'Lojas de Departamento: ',
                        description: `Adequadas para clientes que compram uma variedade de itens de tamanhos diferentes.`
                    },
                    {
                        title: 'Feiras e Eventos Promocionais: ',
                        description: `Como são econômicas, essas sacolas são frequentemente utilizadas para distribuir materiais promocionais ou brindes em eventos.`
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagTShirtPage;
