<?php
  class classMagic {

    private $data = array();

    public $pub_num = 6;

    private $pri_num = 7;

    public function __construct(){
     echo "__constructが実行されました<br>"; 
    }

  }

  $oMagic = new classMagic();

  $oMagic->test = 8;

  $buff = $oMagic->test;

  echo '$oMagic->pri_num;' . $oMagic->pub_num . "<bt>";

  $buff = $oMagic ->pri_num;

  $buff = isset($oMagic->test);

  $buff = empty($oMagiv->test);
?>