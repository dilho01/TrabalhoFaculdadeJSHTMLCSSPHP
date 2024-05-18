<?php
// Dados de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "trabalho_html";

// Criar uma conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Capturar dados do formulário
$nome = isset($_POST['nome']) ? $_POST['nome'] : '';
$sobrenome = isset($_POST['sobrenome']) ? $_POST['sobrenome'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$senha = isset($_POST['senha']) ? $_POST['senha'] : '';

// Verificar se todos os campos estão preenchidos
if ($nome && $sobrenome && $email && $senha) {
    // Query SQL para inserir os dados na tabela
    $sql = "INSERT INTO usuario (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)";

    // Preparar a query
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nome, $sobrenome, $email, $senha);

    // Executar a query
    if ($stmt->execute()) {
        echo "<h1>Registro inserido com sucesso!<h1><br><br>"; 
        echo "<h3>Dados cadastrados:</h3>"; 
        echo "<p><strong>Nome:</strong> $nome</p>"; 
        echo "<p><strong>E-mail:</strong> $sobrenome</p>"; 
        echo "<p><strong>Idade:</strong> $email</p>";
    } else {
        echo "Erro ao inserir registro: " . $stmt->error;
    }

    // Fechar a preparação
    $stmt->close();
} else {
    echo "Todos os campos são obrigatórios.";
}

// Fechar conexão
$conn->close();
?>
