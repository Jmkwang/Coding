#include <stdio.h>

int main(int aaa, char* bbb)
{
	int getRst = makeShape();
    return 0;
}

int makeShape()
{
	int wid;
    int hei;
    printf("Enter width and height:\n");
    printf("width:\n");
    scanf("%f", &wid);
    printf("height:\n");
    scanf("%f", &hei);
    
    int blank;		//空格数量 
    int countBlank;		//计算空格数量用 
    int countHgt;		//计算行数用 
    int countWid;		//计算宽度用 
    int wholeLine;		//计算整行*的数量用 
    blank = wid - 2; 

    for (countHgt = 0; countHgt < hei; countHgt++)		//行数 
    {
        if(countHgt == 0 || countHgt == hei - 1)		//判断是第一行或者最后一行 （第一部分） 
        {
            for(wholeLine = 0; wholeLine < wid; wholeLine++)		//利用循环打出一行wid数量的* 
            {
                printf("*");
            }
            printf("\n");		//打完一行*后下一行 
        }

        if (countHgt != 0 &&  countHgt == hei - 1)		//判断是否需要空心部分 （第二部分） 
        {
            printf("*");		//开头 * 
            for(countBlank = 0; countBlank < blank; countBlank++)		//利用循环补充blank数量的空格
            {
                printf(" ");
            }
            printf("*\n");		//结尾 * 下一行 
        }
    }
}
