var url = 'https://portal.cifra.digital/rest/1/3ecxb2bgmz4kty3k/crm.lead.add';
document.getElementById("promo_submit").addEventListener("click", function (event) {
    event.preventDefault();
    var name_lid = document.getElementById("input-name").value;
    var phone = document.getElementById("input-tel").value;
    var email = document.getElementById("input-mail").value;
    console.log(name_lid);
    console.log(phone);
    console.log(email);
    var params = {
        fields: {
            NAME: name_lid,
            PHONE: [
                {
                    VALUE_TYPE: 'WORK',
                    VALUE: phone
                }
            ],
            EMAIL: [
                {
                    VALUE_TYPE: 'WORK',
                    VALUE: email
                }
            ],
            ASSIGNED_BY_ID: 8,
            SOURCE_ID: 2,
            SOURCE_DESCRIPTION: 'Форма Успейте получить бесплатное занятие',
            UTM_SOURCE: 'Тестовый источник',
            UF_CRM_1671605683: 'klgd.cifra.digital'
        }
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log('Запрос успешно выполнен', data);
        alert("Вы успешно зарегистрировались на мероприятие");
    })
        .catch(function (error) {
        console.error('Ошибка выполнения запроса', error);
        alert("Произошла ошибка");
    });
});
