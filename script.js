let storiesCreated= 0;

$(".submit").click(function() {
    let personName = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let time = $(".number-input").val();
    $(".story").text( "One day my friend " + personName + " and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over. It was a " + adjective + " day at the beach! We ended up staying for " + time + " hours!");
  storiesCreated= storiesCreated +1; 
});