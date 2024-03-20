import React from 'react';
import CategoryComponent from './CategoryComponent';
import ProductCard from '../../Products/ProductCard';
import { useNavigate } from 'react-router-dom';

const PlasticCategory: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path, { replace: false });
        window.scrollTo(0, 0);
    };

    return (
        <CategoryComponent title='Sacolas de Plástico'>
            <ProductCard
                title='Sacola alça camiseta'
                img='sacola-pape-modelo.png'
                content={'São extremamente comuns em uma variedade de estabelecimentos comerciais, desde supermercados até lojas de varejo e boutiques.'}
                textButton='Mais detalhes ➜'
                onClick={() => handleNavigation('/sacolas-camiseta')}
            />
            <ProductCard
                title='Sacola alça vazada'
                img='bag-modelo-produtos.png'
                content={'Para produtos de alto valor, estas sacolas adicionam um toque de sofisticação e classe, enriquecendo a experiência geral do cliente.'}
                textButton='Mais detalhes ➜'
                onClick={() => handleNavigation('/sacolas-vazada')}
            />
            <ProductCard
                title='Sacola alça fita'
                img='cartoes-produto.png'
                content={'Perfeitas para itens que são dados como presentes, as sacolas adicionam um toque especial à entrega do produto.'}
                textButton='Mais detalhes ➜'
                onClick={() => handleNavigation('/sacolas-fita')}
            />
        </CategoryComponent>
    )
}

export default PlasticCategory

