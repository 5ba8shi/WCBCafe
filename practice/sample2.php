<?php for($i=1; $i<4; $i++){
  echo"<option value='{$i}'>{$i}</option>";
}
?>

<?php for($i = 1; $i < 4; $i++){
  echo "<option value='{$i}'>{$i}</option>";
}
?>

<?php for($i = 6; $i <= 100; $i++){
  echo"<option value='{$i}'>{$i}</option>";
}
?>

<?php
$data = array('東京','大阪','京都');
foreach($data as $value){
  echo $value[0];
}
?>

<?php
$data 


<?php for($i = 6; $i <= 100; $i++){
  echo"<option value='{$i}'>{$i}</option>";
}
?>


<div class="form-item">お問い合わせの種類</div>
<?php 
  $types = array('Progateに関するお問い合わせ', 'Progateに対する意見', '採用に関するお問い合わせ', '取材・メディア関連のお問い合わせ', '料金に関するお問い合わせ', 'その他');
 ?>
<!-- この下にselectタグを書いていきましょう -->
<select name="category">
  <option value="未選択">選択してください</option>
   <?php
     foreach ($types as $type) {
      echo "<option value='{$type}'>{$type}</option>";
     }
   ?>