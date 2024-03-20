import ImgZoom from "../../Components/Products/ImgZoom";
import ProductDescription from "../../Components/Products/ProductDescription";
import ProductPageComponent from "../../Components/Products/ProductPageComponent";

const BusinessCardPage: React.FC = () => {
    return (
        <ProductPageComponent >
            <ImgZoom img="bag-modelo-produtos.png" />

            <ProductDescription
                mainTitle="Cartões de visita"
                description="Os cartões de visita são uma ferramenta essencial de networking e marca pessoal, usados 
                para compartilhar informações de contato profissionais e criar uma impressão duradoura. Eles desempenham
                um papel crucial em reuniões, conferências, e outros eventos profissionais, atuando como uma extensão 
                física da sua identidade profissional ou da sua marca."
                applications={[
                    {
                        title: 'Conferências e Feiras de Negócios: ',
                        description: 'Facilitam a troca rápida de informações em eventos onde conhecer pessoas novas é um objetivo chave.'
                    },
                    {
                        title: 'Reuniões Profissionais: ',
                        description: 'Após uma reunião, deixar um cartão de visita pode ajudar a garantir uma conexão duradoura.'
                    },
                    {
                        title: 'Ferramenta de Vendas: ',
                        description: 'Para profissionais de vendas, cartões de visita são essenciais para deixar informações de contato com potenciais clientes.'
                    },
                    {
                        title: 'Demonstração de Seriedade e Compromisso: ',
                        description: 'Oferecer um cartão de visita mostra profissionalismo e demonstra um interesse genuíno em construir uma relação profissional.'
                    },
                    {
                        title: 'Integração Digital: ',
                        description: 'Com a adição de QR codes, os cartões de visita podem ampliar suas funcionalidades, direcionando os contatos para portfólios online, perfis de redes sociais, ou até mesmo vídeos introdutórios.'
                    }
                ]}
            />
        </ProductPageComponent>
    );
}

export default BusinessCardPage;
