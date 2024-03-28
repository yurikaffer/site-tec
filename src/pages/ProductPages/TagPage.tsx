import ImgZoom from "../../Components/Products/ImgZoom";
import ProductDescription from "../../Components/Products/ProductDescription";
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const TagPage: React.FC = () => {
    return (
        <ProductPageComponent>
            <ImgZoom img="tag sf.png" />

            <ProductDescription
                mainTitle="Tags personalizadas"
                description="As tags personalizadas são elementos versáteis de branding e marketing, utilizadas em uma 
                            ampla gama de aplicações para adicionar valor, informação e identidade visual aos produtos 
                            ou serviços. Elas desempenham um papel crucial em estratégias de marketing, comunicação de 
                            marca e experiência do cliente."
                applications={[
                    {
                        title: 'Produtos de Varejo: ',
                        description: 'acessórios, e outros produtos de varejo frequentemente vêm com tags que fornecem informações sobre o produto, cuidados específicos, ou preço.'
                    },
                    {
                        title: 'Brindes Promocionais e Eventos: ',
                        description: 'Tags personalizadas em brindes de eventos podem conter informações sobre a marca, o evento, ou mensagens de agradecimento aos participantes.'
                    },
                    {
                        title: 'Produtos Artesanais e Boutique: ',
                        description: 'Para produtos feitos à mão, as tags adicionam um toque pessoal e informações sobre a autenticidade e a origem do produto.'
                    },
                    {
                        title: 'Decoração de Presentes: ',
                        description: 'Tags personalizadas são usadas em embalagens de presentes para adicionar uma mensagem personalizada ou identificar o destinatário.'
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default TagPage;
