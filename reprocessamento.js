const uIds = ['284be02f-cb0b-4895-ad81-1800f0c181c6',
    '61f7d1aa-47cd-4ff7-963a-9310553adba0',
    '7464f7f4-0253-41cc-aa0c-3ec1112f6875',
    '81e9f04e-5a64-43b1-b87c-ecd02efbdc98',
    'aca54f57-b04b-4739-9f56-8420d5657fb0',
    'e3306697-92eb-4141-bbce-1440bac6d93e',
    'e545e73e-87bb-42ab-9db0-d95b023b0e6d',
    'f9dedb65-7350-40f8-8e89-08714f7371be'
]

const uEmails = ['benedito.eduardoc@hotmail.com',
    'caroline@bol.com.br',
    'sophieadm@tokiomarine.com.br',
    'alinecon@gmail.com',
    'cris2922@gmail.com',
    'teresinharayssa@gmail.com',
    'inamker@gmail.com'
]

const fixTransactions = (userIds) => {
    console.log('Corrigindo transações dos usuários enviados')
}

const sendEmails = (userEmails) => {
    console.log('Enviando comunicação para os usuários impactados')
}

const main = async() => {
    await fixTransactions(uIds)
    await sendEmails(uEmails)
}

main()
    .then(() => console.log('Transações reprocessadas!'))
    .catch(err => console.error(err))