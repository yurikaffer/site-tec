module.exports = {
    ci: {
      collect: {
        // Substitua 'http://localhost/' pelo URL onde seu app é servido localmente
        url: ['http://localhost/'],
        // Aumentar para obter uma média mais estável se os recursos permitirem
        numberOfRuns: 3,
      },
      assert: {
        assertions: {
          // Configura as metas mínimas para cada categoria
          'categories:performance': ['error', {minScore: 0.9}], // Meta de 90%
          'categories:accessibility': ['error', {minScore: 0.95}], // Meta de 95%
          'categories:best-practices': ['error', {minScore: 0.9}], // Meta de 90%
          'categories:seo': ['error', {minScore: 0.9}], // Meta de 90%
          'categories:pwa': ['warn', {minScore: 0.5}], // PWA é menos crítico para alguns sites
  
          // Configurações específicas de auditoria podem ajustar ou desabilitar certas verificações
          'uses-long-cache-ttl': ['warn', {minScore: 0.9}], // Adverte sobre cache curto
          'offscreen-images': ['warn', {minScore: 1}], // Adverte sobre imagens fora da tela
          'font-display': ['warn', {minScore: 1}], // Adverte sobre o bloqueio de renderização de fontes
        },
      },
    },
  };
  