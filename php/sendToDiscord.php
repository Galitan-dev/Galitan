<?PHP
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

    if ($_SERVER["REQUEST_METHOD"] != "POST") {
        header("Location: ../");
        return;
    }
    
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $discord = "Non spécifié";
    $message = $_POST["message"];

    if (!empty($_POST["discord"])) { $discord = $_POST["discord"]; }

    $webhook = "https://discord.com/api/webhooks/775015386122027039/oB55pmgInW5DgNyaCJeX9UIbVwGZNgtO-rn-C1hmJRZwOsM7J9hjnxDOnoD7fFuoCCAn";

    $timestamp = date("c", strtotime("now"));

    $json_data = json_encode([
        "content" => "Du courrier est arrivé !",
        "username" => "Facteur",
        "avatar_url" => "https://th.bing.com/th/id/OIP.vY0zRUECiCxHGY91BiLuPAHaHa?w=194&h=194&c=7&o=5&pid=1.7",
        "tts" => false,
        "embeds" => [
            [
                "type" => "rich",
                "description" => $message,
                "timestamp" => $timestamp,
                "color" => 4105407,
                "author" => [
                    "name" => "$firstname $lastname"
                ],
                "fields" => [
                    [
                        "name" => "Addresse Mail",
                        "value" => $email,
                        "inline" => true
                    ],
                    [
                        "name" => "Tag Discord",
                        "value" => $discord,
                        "inline" => true
                    ]
                ]
            ]
        ]
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

    $ch = curl_init( $webhook );
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
    curl_setopt( $ch, CURLOPT_POST, 1);
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt( $ch, CURLOPT_HEADER, 0);
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

    echo '<br>cc';

    $response = curl_exec( $ch );
    echo '<br>cc';
    echo $response;
?>