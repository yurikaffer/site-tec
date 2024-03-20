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

const BagPlasticLeaked: React.FC = () => {
    return (
        <ProductPageComponent rows={rows} titleTable={'Tabela de medidas sacola de plástico com alça vazada'}>
            <ImgZoom img="bag-modelo-produtos.png" />

            <ProductDescription
                mainTitle="Sacola de Plástico com Alça Vazada"
                description="As sacolas de plástico com alça vazada, também conhecidas como sacolas com alça tipo punch 
                            ou sacola tipo boutique, oferecem uma opção elegante e prática para lojas de varejo, 
                            boutiques e eventos especiais. A característica distintiva dessas sacolas é a alça vazada, 
                            um recorte na própria sacola, que proporciona uma aparência refinada e uma maneira 
                            confortável de carregar."
                applications={[
                    {
                        title: 'Boutiques e Lojas de Roupas: ',
                        description: `Ideal para estabelecimentos que vendem produtos de moda, acessórios e outros itens de luxo, onde a embalagem contribui para a valorização da marca.`
                    },
                    {
                        title: 'Eventos Corporativos e Lançamentos de Produtos: ',
                        description: `São escolhas populares para eventos especiais, onde a apresentação é fundamental para causar uma impressão memorável nos participantes.`
                    },
                    {
                        title: 'Lojas de Cosméticos e Joalherias: ',
                        description: `Para produtos de alto valor, estas sacolas adicionam um toque de sofisticação e classe, enriquecendo a experiência geral do cliente.`
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BagPlasticLeaked;
