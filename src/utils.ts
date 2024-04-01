export function whatsMessage() {
    const phoneNumber = '47 988224259';
    const message = encodeURIComponent('Olá, tudo bem? Vim através do site!');

    const url = ` https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
}