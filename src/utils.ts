export function whatsMessage() {
    const phoneNumber = '47988224259';
    const message = encodeURIComponent('Olá, tudo bem? Vim através do site!');

    // Detecta se o dispositivo é móvel
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // Base URL para dispositivos móveis
    const mobileUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    // Base URL para desktop
    const desktopUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    const whatsappUrl = isMobile ? mobileUrl : desktopUrl;
    window.open(whatsappUrl, '_blank');
}
