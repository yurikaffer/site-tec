import ImgZoom from "../../Components/Products/ImgZoom";
import ProductDescription from "../../Components/Products/ProductDescription";
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const PvcBoardPage: React.FC = () => {
    return (
        <ProductPageComponent>
            <ImgZoom img="bag-modelo-produtos.png" />

            <ProductDescription
                mainTitle="Placas de PVC"
                description="As placas de PVC (policloreto de vinila) são amplamente utilizadas em diversos setores 
                            devido à sua versatilidade, durabilidade e custo-benefício. Este material oferece uma 
                            excelente plataforma para sinalização, decoração, construção e aplicações industriais, 
                            adaptando-se facilmente a necessidades específicas de projetos. "
                applications={[
                    {
                        title: 'Sinalização Comercial e Corporativa: ',
                        description: 'Placas de sinalização interna e externa, incluindo banners, displays de informação, e sinalização direcional.'
                    },
                    {
                        title: 'Feiras e Exposições: ',
                        description: 'Utilizadas para criar stands, displays promocionais e painéis informativos devido à sua facilidade de transporte e montagem.'
                    },
                    {
                        title: 'Decoração de Interiores: ',
                        description: 'Aplicações em design de interiores para revestimentos de parede, painéis decorativos e falsos tetos.'
                    },
                    {
                        title: 'Construção Civil: ',
                        description: 'Usadas em revestimentos externos, partições internas, elementos decorativos de fachadas, e em sistemas de ventilação.'
                    },
                    {
                        title: 'Indústria: ',
                        description: 'Em setores industriais, as placas de PVC são usadas para proteção de máquinas, isolamento acústico, e componentes elétricos devido à sua resistência química e isolamento térmico.'
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default PvcBoardPage;
