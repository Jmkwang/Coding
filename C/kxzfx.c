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
    
    int blank;		//�ո����� 
    int countBlank;		//����ո������� 
    int countHgt;		//���������� 
    int countWid;		//�������� 
    int wholeLine;		//��������*�������� 
    blank = wid - 2; 

    for (countHgt = 0; countHgt < hei; countHgt++)		//���� 
    {
        if(countHgt == 0 || countHgt == hei - 1)		//�ж��ǵ�һ�л������һ�� ����һ���֣� 
        {
            for(wholeLine = 0; wholeLine < wid; wholeLine++)		//����ѭ�����һ��wid������* 
            {
                printf("*");
            }
            printf("\n");		//����һ��*����һ�� 
        }

        if (countHgt != 0 &&  countHgt == hei - 1)		//�ж��Ƿ���Ҫ���Ĳ��� ���ڶ����֣� 
        {
            printf("*");		//��ͷ * 
            for(countBlank = 0; countBlank < blank; countBlank++)		//����ѭ������blank�����Ŀո�
            {
                printf(" ");
            }
            printf("*\n");		//��β * ��һ�� 
        }
    }
}
