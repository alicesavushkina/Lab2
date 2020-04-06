package model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Point {
    private double x;
    private double y;
    private double R;
    private String time;
    private boolean isInArea;

    public Point() {
    }

    public Point(double x, double y, double r, Date date){
        this.x = x;
        this.y = y;
        this.R = r;
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("HH:mm:ss");
        this.time = formatForDateNow.format(date);
        this.isInArea = checkArea(x, y, r);
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return R;
    }

    public String getTime() {
        return time;
    }

    public boolean isInArea() {
        return isInArea;
    }

    @Override
    public String toString() {
        return "main.Point{";
    }

    private static boolean checkArea(double x, double y, double R){
        if (x >= 0 && x <= R && y >= 0 && y <= R){
            return true;
        }
        if (x <= 0 && y <= 0 && (x * x + y * y < R * R)) {
            return true;
        }
        if(x > 0 && y < 0 && y >= 0.5D * x - R / 2.0D)
            return true;
        return false;
    }
}