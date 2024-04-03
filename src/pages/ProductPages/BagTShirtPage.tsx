import ImgZoom from "../../Components/Products/ImgZoom";
import ProductDescription from "../../Components/Products/ProductDescription";
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const rows = [
    { altura: '30cm', largura: '40cm', lateral: '0,4cm' },
    { altura: '40cm', largura: '50cm', lateral: '0,4cm' },
    { altura: '45cm', largura: '60cm', lateral: '0,4cm' },
    { altura: '50cm', largura: '70cm', lateral: '0,6cm' },
    { altura: '60cm', largura: '80cm', lateral: '0,7cm' },
    { altura: '70cm', largura: '90cm', lateral: '0,7cm' },
    { altura: '90cm', largura: '100cm', lateral: '0,9cm' },
];

const BagTShirtPage: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola de plástico com alça camiseta'} plasticBag={true}>
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
