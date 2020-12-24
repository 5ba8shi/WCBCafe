package ex6;
import static ex6.Test.print;
public class OverloadImport {
  public static void main(String[] args){
    print("sample");
  }
}

public class Main {
  private final static int VALUE = 0;
  public static void main(String[] args) {
    System.out.println(ex7.MainVALUE);
  }
}

package aaa;

import java.io.IOException;

class Test {
  void boo() throws IOException {
    throw new IOException();
  }
}

public class Sample {
  void foo() throws IOException {
    throw new IOException();
  }
}


package sample;
public class Test {

}

public class Main {
  public static void main(String[] args){
    java.lang.String str = "100";
    int val = java.lang.Integer.parseInt(str);
  }
}



import java.lang.String;
import java.lang.Integer;
import java.math.BigDecimal;

public class Main {
  public static void main(String[] args) {
    String str = "100";
    int val = Integer.parseInt(str);
    BigDecimal decimal = new BigDecimal(val);
    System.out.println(decimal.intValue());
  }
}